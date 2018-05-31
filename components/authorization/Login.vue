<template>
    <div class="col">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">邮箱地址</label>
                <input type="email"
                       v-model="email"
                       class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="输入邮箱">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">密码</label>
                <input type="password"
                       v-model="password"
                       class="form-control" id="exampleInputPassword1" placeholder="密码">
            </div>
            <div class="form-check">
                <input type="checkbox"
                       v-model="remember"
                       class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">记住我</label>
            </div>
            <button type="submit" class="btn btn-primary">登陆</button>
        </form>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                email: '',
                password: '',
                remember: false
            }
        }
    }
</script>

<style scoped>

</style>