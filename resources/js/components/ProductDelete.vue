<template>
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header"><h3><i class="fas fa-trash"></i>&nbsp;Delete Product</h3></div>
                <div class="card-body">
                    <form @submit.prevent="deleteRecord">
                        <div class='form-group'>
                            <label htmlFor='product_name'>Product Name</label>
                            <input type="textfield" class="form-control" id="product_name" v-model="form.product_name" disabled>
                        </div>
                        <div class='form-group'>
                            <label htmlFor='product_price'>Product Price</label>
                            <input type="textfield" class="form-control" id="product_price" v-model="form.product_price" disabled>
                        </div>
                        <div class='form-group'>
                            <p><b>Are you sure delete this record?</b></p>
                            <router-link :to="{ name: 'product-list' }" class="btn btn-secondary" title="Back"><i class="fas fa-arrow-alt-circle-left"></i>&nbsp;Back</router-link>
                            &nbsp;
                            &nbsp;
                            <button class="btn btn-danger" title="Delete Record"><i class="fas fa-trash"></i>&nbsp;Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                errors: [],
                form:{
                    product_name: null,
                    product_price: null
                }
            };
        },
        created() {
            this.loadData();
        },
        methods: {
            loadData() {
                // load data berdasarkan id
                axios
                .get("http://localhost:8080/api/product/" + this.$route.params.id)
                .then(response => {
                    // post value yang dari response ke form
                    this.form.product_name = response.data.product_name;
                    this.form.product_price = response.data.product_price;
                });
            },
            deleteRecord() {
                this.$swal.fire({
                    title: 'Delete Record',
                    text: "Are you sure delete this record?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#e3342f',
                    cancelButtonColor: '#6c757d',
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel'
                }).then((result) => {
                    if (result.value) {
                        this.$swal.fire({
                            title: 'Success!',
                            text: 'Product deleted successfully',
                            icon: 'success',
                            timer: 1000
                        });
                        axios
                        .delete("http://localhost:8080/api/products/" + this.$route.params.id)
                        .then(response => {
                            this.$router.push("product-list");
                        });
                    }
                })
            },
        }
    }
</script>