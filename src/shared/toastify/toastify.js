import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const successStyle = {
  background: '#e9f7f0',
  color: 'rgb(82, 75, 75)',
  borderRadius: '5px',
  fontSize: '16px',
  top: 0,
};

const errorStyle = {
  background: '#f97e93e9',
  color: '#ffffff',
  borderRadius: '9px',
  fontSize: '16px',
};

const infoStyle = {
  background: '#aed2f4',
  color: '#ffffff',
  borderRadius: '9px',
  fontSize: '16px',
};

export const toastSuccess = message => {
  toast.success(message, {
    style: successStyle,
  });
};

export const toastError = message => {
  toast.error(message, {
    style: errorStyle,
  });
};

export const toastInfo = message => {
  toast.info(message, {
    style: infoStyle,
  });
};
