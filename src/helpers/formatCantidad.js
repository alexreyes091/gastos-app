export const formatCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-ES",{
        style: 'currency',
        currency: 'HNL'
    });
}