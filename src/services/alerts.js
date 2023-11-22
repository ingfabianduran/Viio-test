import swal from 'sweetalert2';

export const showAlert = ({ title = 'Correcto', text, icon = 'success' }) => {
  return swal.fire({
    title,
    text,
    icon,
  });
};