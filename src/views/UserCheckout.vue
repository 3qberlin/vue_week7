<template>
  <VueLoading :active="isLoading" :z-index="1060" />
  <div class="my-5 row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <table class="table align-middle">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="text-end">{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計</td>
            <td class="text-end">{{ order.total }}</td>
          </tr>
        </tfoot>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end" v-if="order.is_paid === false">
        <button type="submit" class="btn btn-danger">確認付款去</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useToastMessageStore } from "@/stores/toastMessage";

export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
    };
  },
  methods: {
    ...mapActions(useToastMessageStore, ['pushMessage']),
    getOrder() {
      const url = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.order = response.data.order;
        this.isLoading = false;
      }).catch((error) => {
        this.isLoading = false;
        this.pushMessage({
          style: 'danger',
          title: '取得訂單失敗',
          content: error.response.data.message,
        })
      });
    },
    payOrder() {
      const url = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/pay/${this.orderId}`;
      this.isLoading = true;
      this.$http.post(url).then(() => {
        this.isLoading = false;
        this.getOrder();
      }).catch((error) => {
        this.isLoading = false;
        this.pushMessage({
          style: 'danger',
          title: '付款失敗',
          content: error.response.data.message,
        })
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
