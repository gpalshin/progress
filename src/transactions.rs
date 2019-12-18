use exonum::blockchain::{ExecutionError, ExecutionResult, Transaction, TransactionContext};
use exonum_derive::{ProtobufConvert, TransactionSet};
use failure::Fail;

use super::proto;
use crate::{schema::Schema};

#[derive(Clone, Debug, ProtobufConvert)]
#[exonum(pb = "proto::Put", serde_pb_convert)]
pub struct Put {
    pub id: u64,
    pub semestr: u32,
    pub year: u32,
    pub control_type_id: u32,
    pub subject_id: u64,
    pub date: u32,

    pub profile_id: u32,
    pub profile_uid: u32,

    pub mark_id: u64,
    pub mark_nmb_retake: u32,
    pub mark_date: u32,
    pub mark_value: u32,
}

#[derive(Serialize, Deserialize, Clone, Debug, TransactionSet)]
pub enum Transactions {
    Put(Put),
}

#[derive(Debug, Fail)]
#[repr(u8)]
pub enum Error {
    #[fail(display = "Statement is invalid")]
    InvalidStatement = 0,
}

impl From<Error> for ExecutionError {
    fn from(value: Error) -> ExecutionError {
        let description = format!("{}", value);
        ExecutionError::with_description(value as u8, description)
    }
}

impl Transaction for Put {
    fn execute(&self, mut context: TransactionContext) -> ExecutionResult {
        let pub_key = &context.author();
        let hash = context.tx_hash();

        let mut schema = Schema::new(context.fork());

        if schema.statement(pub_key, self.id, self.profile_id).is_none() {
            schema.create_statement(pub_key, 
                self.id, 
                self.semestr, 
                self.year, 
                self.control_type_id, 
                self.subject_id, 
                self.date, 
                self.profile_id, 
                self.profile_uid, 
                self.mark_id, 
                self.mark_nmb_retake, 
                self.mark_date, 
                self.mark_value, 
                &hash);
            Ok(())
        } else {
            schema.create_statement(pub_key, 
                self.id, 
                self.semestr, 
                self.year, 
                self.control_type_id, 
                self.subject_id, 
                self.date, 
                self.profile_id, 
                self.profile_uid, 
                self.mark_id, 
                self.mark_nmb_retake, 
                self.mark_date, 
                self.mark_value, 
                &hash);
            Ok(())
        }
    }
}
