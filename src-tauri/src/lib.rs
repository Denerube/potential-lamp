use std::collections::HashMap;
mod services;


#[tauri::command]
fn get_moths_map() -> HashMap<u32, String> {
    let  moths_map = HashMap::from([
        (1, "jan".to_owned()),
        (2, "feb".to_owned()),
        (3, "mar".to_owned()),
        (4, "apr".to_owned()),
        (5, "may".to_owned()),
        (6, "jun".to_owned()),
        (7, "jul".to_owned()),
        (8, "aug".to_owned()),
        (9, "sep".to_owned()),
        (10, "oct".to_owned()),
        (11, "nov".to_owned()),
        (12, "dec".to_owned())
    ]);
     moths_map
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            get_moths_map,
            services::shift_worker_service::get_all_shift_workers,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
