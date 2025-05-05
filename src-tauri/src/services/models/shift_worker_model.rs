use std::collections::HashMap;

use serde::{Deserialize, Serialize};

use super::worker_model::WorkerModel;
#[derive(Debug, Deserialize,Serialize)]
pub struct ShiftWorkerModel{
    pub parent:WorkerModel,
    pub working_hours_per_date:HashMap<u32, u32>
} 

impl ShiftWorkerModel {
    pub fn new(id:u32,name:String,working_hours_per_date:HashMap<u32, u32>) -> Self {
        Self {
            parent:WorkerModel::new(id, name),
            working_hours_per_date:working_hours_per_date
        }
    }
}