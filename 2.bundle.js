webpackJsonp([2],{10:function(t,e,a){var o=Vue.extend({template:a(13),data:function(t){return{items:[]}},computed:{allCheck:{get:function(){return!1},set:function(t){this.items.forEach(function(e){e.checked=t})}}},methods:{removeUsers:function(){this.items=this.items.filter(function(t){return!t.checked})},removeUser:function(t){this.items.$remove(t)},addUser:function(){$("#exampleModal").modal()},editUser:function(t){this.username=t.name,$("#exampleModal").modal()},saveUser:function(){this.items.push({id:4,name:this.username}),$("#exampleModal").modal("hide")}},route:{activate:function(t){var e=this;console.log("hook-example activated!"),this.$http({url:"./data/user.json",method:"GET"}).then(function(t){e.items=t.data},function(t){}),t.next()},deactivate:function(t){console.log("hook-example deactivated!"),t.next()}}});t.exports=o},13:function(t,e){t.exports='<div id=grid> {{mf}} <button id=add type=button name=button class="btn btn-default"><a v-link="{ path: \'/addUser\' }">添加用户</a></button> <button id=add type=button name=button v-on:click=addUser class="btn btn-default">添加用户弹窗</button> <button id=remove type=button name=button v-on:click=removeUsers class="btn btn-default">删除用户</button> <br/><br/> <table class="table table-bordered table-striped"> <tr> <th><input v-model=allCheck type=checkbox /></th> <th>id</th> <th>name</th> <th>age</th> <th></th> </tr> <template v-for="item in items"> <tr> <td><input type=checkbox v-model=item.checked /></td> <td>{{item.id}}</td> <td><a v-on:click=editUser(item) style=cursor:pointer>{{item.name}} </a></td> <td><a v-on:click=editUser(item) style=cursor:pointer>{{item.age}} </a></td> <td><span v-on:click=removeUser(item)>删除</span></td> </tr> </template> </table> <div class="modal fade" id=exampleModal tabindex=-1 role=dialog aria-labelledby=exampleModalLabel> <div class=modal-dialog role=document> <div class=modal-content> <div class=modal-header> <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button> <h4 class=modal-title id=exampleModalLabel>添加新用户</h4> </div> <div class=modal-body> <form> <div class=form-group> <label for=recipient-name class=control-label>姓名:</label> <input v-model=username type=text class=form-control id=recipient-name> </div> </form> </div> <div class=modal-footer> <button type=button class="btn btn-default" data-dismiss=modal>关闭</button> <button v-on:click=saveUser type=button class="btn btn-primary">保存</button> </div> </div> </div> </div> </div>'}});