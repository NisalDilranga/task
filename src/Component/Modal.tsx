import imgI from "../assets/icons/icon/image.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-[400px] h-auto shadow-xl">
          <div className="ml-[45%] mb-4 "><img src={imgI} alt=""  className="w-[50px]"/></div>
        <h2 className="text-xl font-bold mb-4 text-center">Confirm your selection</h2>
        <p className="mb-6">
          Are you sure you want to submit your property selection to the VInvest2? This action cannot be undone.
        </p>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-14 py-2 bg-gray-300 rounded-md border border-gray"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-14 py-2 bg-green-600 text-white rounded-md border "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
