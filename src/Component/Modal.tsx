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
    <div className="bg-white rounded-lg p-6 sm:p-8 w-[90%] max-w-[400px] h-auto shadow-xl">
      <div className="flex justify-center mb-4">
        <img src={imgI} alt="" className="w-[40px] sm:w-[50px]" />
      </div>
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
        Confirm your selection
      </h2>
      <p className="mb-6 text-sm sm:text-base text-center">
        Are you sure you want to submit your property selection to VInvest2? This action cannot be undone.
      </p>
      <div className="flex justify-between space-x-4">
        <button
          onClick={onClose}
          className="flex-1 py-2 bg-gray-300 rounded-md border border-gray-400 text-sm sm:text-base"
        >
          Cancel
        </button>
        <button
          onClick={onSubmit}
          className="flex-1 py-2 bg-green-600 text-white rounded-md border border-green-600 text-sm sm:text-base"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default Modal;
