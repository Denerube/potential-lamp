use serde::{Deserialize, Serialize};


#[derive(Debug, Deserialize,Serialize)]
pub struct WorkerModel {
    pub id:u32,
    pub name:String,
}
impl WorkerModel {
    pub fn new(id:u32,name:String) -> Self {
        Self {
            id:id,
            name:name
        }
    }
}