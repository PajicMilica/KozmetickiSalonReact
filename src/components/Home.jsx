const str="KOZMETICKI SALON STAR BEOGRAD, centar za lepotu i zdravlje, osnovan je 2012. godine."+ 
" Nalazimo se u blizini hrama Svetog Save, u ul. Stojana Protića 39. u Beogradu." +
"Prijatan ambijent, ljubazno osoblje i kvalitetna usluga je ono što Vam nudimo. U našem salonu sebi možete priuštiti opuštajuće masaže,"+
" manikir, pedikir, tretmane lica, depilacije, tretmane nadogradnje, minivala trepavica i bezbroj drugih tretmana.";
function Home() {
    return (
      <div className="card-home">
           <h3 className="card-home-h3"> Kozmetički salon STAR</h3>
           <p>{str}</p>
      </div>
    );
  }
  export default Home;