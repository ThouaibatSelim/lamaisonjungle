// Import des fichiers
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png';


function App() {
	return (
		<div>
			<Banner > 
				<img src={logo} alt='La maison jungle logo' className='lmj-logo'/>
				<h1 className='lmj-title'>LA MAISON JUNGLE</h1>
			</Banner >
				
			<Cart />
			<ShoppingList />
		</div>
	)
};


export default App;