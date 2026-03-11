import React, { useRef } from 'react';
import { X, Download, Upload, FileText, Calendar } from 'lucide-react';

interface ExportModalProps {
  onClose: () => void;
  onExportJSON: () => void;
  onExportCSV: () => void;
  onExportICal: () => void;
  onImportCSV: (file: File) => Promise<void>;
}

const ExportModal: React.FC<ExportModalProps> = ({ 
  onClose, 
  onExportJSON, 
  onExportCSV, 
  onExportICal, 
  onImportCSV 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        await onImportCSV(file);
        onClose();
      } catch (error) {
        alert('Ошибка при импорте файла. Проверьте формат CSV.');
      }
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Экспорт и импорт</h3>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="modal-body">
          <div className="export-section">
            <h4>Экспорт данных</h4>
            <div className="export-buttons">
              <button className="export-btn" onClick={onExportJSON}>
                <Download size={16} />
                JSON
              </button>
              <button className="export-btn" onClick={onExportCSV}>
                <FileText size={16} />
                CSV
              </button>
              <button className="export-btn" onClick={onExportICal}>
                <Calendar size={16} />
                iCal
              </button>
            </div>
          </div>
          
          <div className="import-section">
            <h4>Импорт данных</h4>
            <button className="import-btn" onClick={handleImportClick}>
              <Upload size={16} />
              Импорт CSV
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              style={{ display: 'none' }}
              onChange={handleFileSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
