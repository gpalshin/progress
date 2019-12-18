use exonum::{
    crypto::{Hash, PublicKey},
    storage::{Fork, ProofListIndex, ProofMapIndex, Snapshot},
};
use crate::{statement::{Statement, StatementIndex, Mark, Profile}};


#[derive(Debug)]
pub struct Schema<T> {
    view: T,
}

impl<T> Schema<T>
where
    T: AsRef<dyn Snapshot>,
{
    pub fn new(view: T) -> Self {
        Schema { view }
    }

    pub fn statements(&self) -> ProofMapIndex<&T, StatementIndex, Statement> {
        ProofMapIndex::new("progress.statements", &self.view)
    }

    pub fn statement_history(
        &self,
        public_key: &PublicKey,
        statement_id: u64,
        student_id: u32
    ) -> ProofListIndex<&T, Hash> {
        ProofListIndex::new_in_family(
            "progress.statement_history",
            &StatementIndex::new(public_key, statement_id, student_id),
            &self.view
        )
    }

    pub fn statement(&self, pub_key: &PublicKey, statement_id: u64, student_id: u32) -> Option<Statement> {
        self.statements().get(&StatementIndex::new(pub_key, statement_id, student_id))
    }

    pub fn state_hash(&self) -> Vec<Hash> {
        vec![self.statements().merkle_root()]
    }

}

impl<'a> Schema<&'a mut Fork> {

    pub fn statements_mut(
        &mut self,
    ) -> ProofMapIndex<&mut Fork, StatementIndex, Statement> {
        ProofMapIndex::new("progress.statements", &mut self.view)
    }
    
    pub fn statement_history_mut(
        &mut self,
        public_key: &PublicKey,
        statement_id: u64,
        student_id: u32
    ) -> ProofListIndex<&mut Fork, Hash> {
        ProofListIndex::new_in_family(
            "progress.statement_history",
            &StatementIndex::new(public_key, statement_id, student_id),
            &mut self.view,
        )
    }
    
    pub fn create_statement(
        &mut self,
        pub_key: &PublicKey,
        id: u64,
        semestr: u32,
        year: u32,
        control_type_id: u32,
        subject_id: u64,
        date: u32,
        profile_id: u32,
        profile_uid: u32,
        mark_id: u64,
        mark_nmb_retake: u32,
        mark_date: u32,
        mark_value: u32,
        transaction: &Hash,
        ) {
        let statement = {
            let mark = Mark::new(mark_id, mark_nmb_retake, mark_date, mark_value);
            let profile = Profile::new(profile_id, profile_uid, mark);
            let mut history = self.statement_history_mut(pub_key, id, profile.id);
            history.push(*transaction);
            let history_hash = history.merkle_root();
            Statement::new(
                id,
                semestr,
                year,
                control_type_id,
                subject_id,
                date,
                profile,
                history.len(), 
                &history_hash,
            )
        };
        let statement_index = StatementIndex::new(pub_key, statement.id, statement.profile.id);
        self.statements_mut().put(&statement_index, statement);
    }
}
