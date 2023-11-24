import swal from 'sweetalert2';

export const showAlert = ({ title = 'Correcto', text, icon = 'success' }) => {
  return swal.fire({
    title,
    text,
    icon,
    confirmButtonColor: '#344955',
  });
};

export const showConfirmAlert = ({ title = '¿Está seguro?', text = '¿De continuar con el proceso?', icon = 'warning' }) => {
  return swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: '#344955',
    cancelButtonColor: '#f9aa33',
    confirmButtonText: 'Si',
  });
};