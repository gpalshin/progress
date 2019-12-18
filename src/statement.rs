use exonum::storage::proof_map_index::HashedKey;
use exonum_derive::ProtobufConvert;
use exonum::crypto::{PublicKey, CryptoHash, Hash};
use std::mem;
use exonum::storage::StorageKey;
use super::proto;


#[derive(Clone, Debug, ProtobufConvert)]
#[exonum(pb = "proto::Mark", serde_pb_convert)]
pub struct Mark {
    pub id: u64,
    pub nmb_retake: u32,
    pub date: u32,
    pub value: u32,
}

impl Mark {
    pub fn new( id: u64,
            nmb_retake: u32,
            date: u32,
            value: u32) -> Self {
        Self {
            id: id,
            nmb_retake: nmb_retake,
            date: date,
            value: value,
        }
    }
}

impl PartialEq for Mark {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id &&
        self.nmb_retake == other.nmb_retake &&
        self.date == other.date &&
        self.value == other.value
    }
}

#[derive(Clone, Debug, ProtobufConvert)]
#[exonum(pb = "proto::Profile", serde_pb_convert)]
pub struct Profile {
    pub id: u32,
    pub uid: u32,
    pub mark: Mark,
}

impl Profile {
    pub fn new( id: u32,
            uid: u32,
            mark: Mark) -> Self {
        Self {
            id: id,
            uid: uid,
            mark: mark,
        }
    }
}

impl PartialEq for Profile {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id &&
        self.uid == other.uid &&
        self.mark == other.mark
    }
}

#[derive(Clone, Debug, ProtobufConvert)]
#[exonum(pb = "proto::Statement", serde_pb_convert)]
pub struct Statement {
    pub id: u64,
    pub semestr: u32,
    pub year: u32,
    pub control_type_id: u32,
    pub subject_id: u64,
    pub date: u32,
    pub profile: Profile,
    pub history_len: u64,
    pub history_hash: Hash,
}

impl Statement {
    pub fn new( id: u64,
                semestr: u32,
                year: u32,
                control_type_id: u32,
                subject_id: u64,
                date: u32,
                profile: Profile,
                history_len: u64,
                &history_hash: &Hash,
        ) -> Self {
        Self {
                id: id,
                semestr: semestr,
                year: year,
                control_type_id: control_type_id,
                subject_id: subject_id,
                date: date,
                profile: profile,
                history_len: history_len,
                history_hash: history_hash,
        }
    }
}

impl PartialEq for Statement {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id &&
        self.semestr == other.semestr &&
        self.year == other.year &&
        self.control_type_id == other.control_type_id &&
        self.subject_id == other.subject_id &&
        self.profile == other.profile
    }
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct StatementIndex {
    pub pub_key: PublicKey,
    pub statement_id: u64,
    pub student_id: u32,
}

impl CryptoHash for StatementIndex {
    fn hash(&self) -> Hash {
        let mut res = String::new();
        res.push_str(&self.pub_key.hash().to_hex());
        res.push_str(&self.statement_id.hash().to_hex());
        res.push_str(&self.student_id.hash().to_hex());
        res.hash()
    }
}

impl StorageKey for StatementIndex {
    fn size(&self) -> usize {
        mem::size_of_val(&self.pub_key) + mem::size_of_val(&self.statement_id) + mem::size_of_val(&self.student_id)
    }
    
    fn write(&self, buffer: &mut [u8]) {
        let pub_key: Vec<u16> = self.pub_key.to_hex().encode_utf16().collect();
        let mut pub_key: Vec<u8> = pub_key.iter().map(|x| *x as u8).collect();
        
        self.statement_id.write(&mut buffer[4..12]);
        self.student_id.write(&mut buffer[0..4]);
        
        let my_buffer = [pub_key.as_mut_slice(), &mut buffer[0..12]].concat();
        
        let mut count = 0usize;
        for elem in buffer.iter_mut() {
            *elem = my_buffer[count];
            count += 1;
        }
    }
    
    fn read(buffer: &[u8]) -> Self {
        let statement_id = u64::read(&buffer[64..72]);
        let student_id = u32::read(&buffer[72..76]);
        let pub_key = PublicKey::from_slice(&buffer[0..64]);
        
        StatementIndex {
            pub_key: pub_key.unwrap(),
            statement_id: statement_id,
            student_id: student_id,
        }
    }
}

impl HashedKey for StatementIndex {}

impl StatementIndex {
    pub fn new(pub_key: &PublicKey, statement_id: u64, student_id: u32) -> Self {
        StatementIndex {
            pub_key: pub_key.to_owned(),
            statement_id: statement_id,
            student_id: student_id,
        }
    }
}

