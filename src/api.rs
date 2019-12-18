use exonum::{
    api::{self, ServiceApiBuilder, ServiceApiState},
    blockchain::{self, BlockProof, TransactionMessage},
    crypto::{Hash, PublicKey},
    explorer::BlockchainExplorer,
    helpers::Height,
    storage::{ListProof, MapProof},
};

use crate::{Schema, SERVICE_ID, statement::{Statement, StatementIndex}};
#[derive(Debug, Clone, Copy)]
pub struct PublicApi;

#[derive(Debug, Clone, Copy, Serialize, Deserialize, PartialEq)]
pub struct StatementQuery {
	pub pub_key: PublicKey,
	pub statement_id: u64,
	pub student_id: u32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct StatementProof {
    pub to_table: MapProof<Hash, Hash>,
    pub to_statement: MapProof<StatementIndex, Statement>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct StatementHistory {
    pub proof: ListProof<Hash>,
    pub transactions: Vec<TransactionMessage>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct StatementInfo {
    pub block_proof: BlockProof,
    pub statement_proof: StatementProof,
    pub statement_history: Option<StatementHistory>,
}

impl PublicApi {
	
    pub fn statement_info(	state: &ServiceApiState,
        					query: StatementQuery,
    ) -> api::Result<StatementInfo> {
		let snapshot = state.snapshot();
		let general_schema = blockchain::Schema::new(&snapshot);
		let progress_schema = Schema::new(&snapshot);

		let max_height = general_schema.block_hashes_by_height().len() - 1;
		let block_proof = general_schema
			.block_and_precommits(Height(max_height))
			.unwrap();
		let to_table: MapProof<Hash, Hash> = general_schema
			.get_proof_to_service_table(SERVICE_ID, 0);
		let statement_index = StatementIndex::new(&query.pub_key, query.statement_id, query.student_id);
		let to_statement: MapProof<StatementIndex, Statement> =
			progress_schema.statements().get_proof(statement_index);

		let statement_proof = StatementProof {
			to_table,
			to_statement,
		};
		let statement = progress_schema.statement(&query.pub_key, query.statement_id, query.student_id);

		let statement_history = statement.map(|_| {
			let history = progress_schema.statement_history(&query.pub_key, query.statement_id, query.student_id);
			let proof = history.get_range_proof(0, history.len());
			let explorer = BlockchainExplorer::new(state.blockchain());
	
			let transactions = history
				.iter()
				.map(|record| explorer.transaction_without_proof(&record).unwrap())
				.collect::<Vec<_>>();
	
			StatementHistory {
				proof,
				transactions,
			}
		});

		Ok(StatementInfo {
			block_proof,
			statement_proof,
			statement_history,
		})
	}

	pub fn wire(builder: &mut ServiceApiBuilder) {
		builder
			.public_scope()
			.endpoint("v1/statements/info", Self::statement_info);
	}
}