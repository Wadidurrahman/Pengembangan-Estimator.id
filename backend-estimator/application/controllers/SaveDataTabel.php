<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class Welcome extends CI_Controller {

    public function __construct() {
        parent::__construct();
        // Load model jika perlu
    }

    // Method untuk menyimpan data Excel
    public function saveExcel() {
        $input = json_decode(file_get_contents("php://input"), true);
        // Lakukan validasi data jika perlu

        // Buat spreadsheet baru
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        // Menyimpan data dari frontend ke Excel
        foreach ($input as $rowIndex => $rowData) {
            foreach ($rowData as $colIndex => $cellData) {
                $sheet->setCellValueByColumnAndRow($colIndex + 1, $rowIndex + 1, $cellData);
            }
        }

        // Simpan file Excel
        $fileName = 'data.xlsx';
        $writer = new Xlsx($spreadsheet);
        $filePath = FCPATH . 'uploads/' . $fileName; // Pastikan folder 'uploads' ada dan dapat ditulisi

        $writer->save($filePath);

        // Kembalikan response
        $this->output->set_content_type('application/json');
        echo json_encode(['status' => 'success', 'file' => $fileName]);
    }

    // Method untuk mengunduh file Excel
    public function downloadExcel($fileName) {
        $filePath = FCPATH . 'uploads/' . $fileName;

        if (file_exists($filePath)) {
            header('Content-Description: File Transfer');
            header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            header('Content-Disposition: attachment; filename="' . basename($filePath) . '"');
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            header('Content-Length: ' . filesize($filePath));
            flush(); // Flush system output buffer
            readfile($filePath);
            exit;
        } else {
            show_404();
        }
    }
}
