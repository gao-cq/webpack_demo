<div class="layer">
	<div>this is <%= name %></div>
	<% for(var k in arr){ %>
	<div><%= arr[k] %></div>
	<% } %>
	<div>this is pic</div>
	<img src="<%= src %>" alt="">
	<img src=" ${require('../images/pic.jpg')} " alt="">
</div>