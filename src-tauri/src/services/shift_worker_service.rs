use std::collections::HashMap;

use crate::services::models::shift_worker_model::ShiftWorkerModel;

#[tauri::command]
pub fn get_all_shift_workers() -> Vec<ShiftWorkerModel> {

    let worker_one: ShiftWorkerModel = ShiftWorkerModel::new(123, "testNaam".to_string(),HashMap::from([
        (1, 8),
        (2, 8),
        (3, 8),
        (4, 8),
    ]));

    let worker_two: ShiftWorkerModel = ShiftWorkerModel::new(124, "testNaamTwee".to_string(),HashMap::from([
        (1, 4),
        (2, 4),
        (3, 4),
        (4, 4), 
    ]));

    return vec![worker_one,worker_two];

}