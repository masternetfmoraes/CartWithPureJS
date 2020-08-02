const items =[
			{
				id: 0,
				nome: 'camiseta',
				img: 'assets/img/womandress01.png',
				quantidade: 0
			},
			{
				id: 1,
				nome: 'shorts',
				img: 'assets/img/womandress01.png',
				quantidade: 0
			},
			{
				id: 2,
				nome: 'tenis',
				img: 'assets/img/womandress01.png',
				quantidade: 0
			},
			]

			inicializarLoja = () =>{
				var containerProdutos = document.getElementById("produtos");
				items.map((val)=>{
					containerProdutos.innerHTML+=`

					<div class="produto-single">
<img src="`+val.img+`" />
<p class="titulo-produto">`+val.nome+`</p>
<a key="`+val.id+`" href="#" class="botao">Adicionar ao Carrinho</a>
</div>

					`;
					//console.log(''+val.nome)
				})
			}
			inicializarLoja();


			atualizarCarrinho = ()=>{
				var containerCarrinho = document.getElementById("carrinho");
				containerCarrinho.innerHTML = `<p class="title-carrinho">Items do Carrinho</p>`;
				items.map((val)=>{
					if(val.quantidade > 0){

						containerCarrinho.innerHTML+=`

					<p>Produto: `+val.nome+`| quantidade:<strong>`+val.quantidade+`</strong></p>
					<hr />
					`;
					}
				})
				//console.log(items);
			}

			var links = document.getElementsByTagName('a');

			for(var i = 0; i < links.length; i++){
				links[i].addEventListener("click",function(){
					let key = this.getAttribute('key');
					items[key].quantidade++;
					atualizarCarrinho();
					return false;
				})
			}


