// components/ConfirmNavigateModal.tsx
import React from 'react';
import Modal from '@/app/ui/Modal-Test/modalComponent';
import TotalStyles from '@/app/ui/styles/TotalStyles';

interface ConfirmNavigateModalProps {
  show: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmNavigateModal: React.FC<ConfirmNavigateModalProps> = ({
  show,
  onConfirm,
  onClose,
}) => {
  return (
    <Modal show={show} onClose={onClose}>
      <h2 className="text-lg font-bold mb-4">
        저장하지 않은 변경 사항이 있습니다. 저장하지 않고 나가시겠습니까?
      </h2>
      <div className="flex justify-end space-x-4">
        <button
          className={`${TotalStyles.ModalButton} ${TotalStyles.ModalCancelButton}`}
          onClick={onClose}
        >
          취소
        </button>
        <button
          className={`${TotalStyles.ModalButton} ${TotalStyles.ModalConfirmButton}`}
          onClick={onConfirm}
        >
          확인
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmNavigateModal;
