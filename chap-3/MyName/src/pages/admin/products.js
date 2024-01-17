//sử dụng localStorage để crud
import { product } from "@/data";
const AdminProductsPage = () => {
  return/*html */ `<div class="container">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th></th>
                </tr>
              </thead>
            <body>
              ${product.map (
                (products, index) =>`
              <tr>
                <td>${index +1}</td>
                <td>${products.name}</td>
                <td>
                  <button data-id="${products.id}" class="btn btn-danger btn-remove">Xóa</button>
                </td>
              </tr>
              `
              )}
            </body>
          </table>
    </div>`;
};

export default AdminProductsPage;