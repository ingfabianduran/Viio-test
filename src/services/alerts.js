import swal from 'sweetalert2';

export const showAlert = ({ title = 'Correcto', text, icon = 'success' }) => {
  return swal.fire({
    title,
    text,
    icon,
  });
};

export const showConfirmAlert = ({ title = '¿Está seguro?', text = '¿De continuar con el proceso?', icon = 'warning' }) => {
  return swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si',
  });
};