<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h3><i class="fas fa-list"></i>&nbsp;List Product</h3>
                </div>
                <div class="card-body">
                    <router-link :to="{name: 'product-add'}" class='btn btn-success mb-3' title="Add New Record">
                        <i class="fas fa-plus-circle"></i>&nbsp;Add Record
                    </router-link>
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped" style="font-style: Calibri;font-size:13px">
                            <thead>
                                <tr>
                                    <th width="100" class="text-center">Action</th>
                                    <th>Product Name</th>
                                    <th width="200">Product Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(product, index) in products.data" :key="product.id">
                                    <td class="text-center">
                                        <div class="btn-group">
                                            <router-link :to="{name: 'product-view', params: { id: product.id }}" class="btn btn-default btn-sm" title="View Record"><i class="fas fa-eye"></i></router-link>
                                            <router-link :to="{name: 'product-edit', params: { id: product.id }}" class="btn btn-default btn-sm" title="Edit Record"><i class="fas fa-edit"></i></router-link>
                                            <router-link :to="{name: 'product-delete', params: { id: product.id }}" class="btn btn-default btn-sm" title="Delete Record"><i class="fas fa-trash"></i></router-link>
                                        </div>
                                    </td>
                                    <td>{{ product.product_name }}</td>
                                    <td>{{ product.product_price }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <pagination :data="products" @pagination-change-page="getResult"></pagination>


                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                products: []
            };
        },
        created() {
              this.getResult();
        },
        methods: {
            getResult(page){
                axios
                .get("http://localhost:8080/api/products_page?page=" + page)
                .then(response => {
                    return response.data;
                }).then(data => {
                    this.products = data;
                });
            },
        }
    }
</script>