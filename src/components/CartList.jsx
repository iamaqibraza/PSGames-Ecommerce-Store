import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

export default function CartList({ cartItems }) {
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(removeFromCart(id));
		console.log(cartItems);
	};
	return (
		<ul className="sm:px-8">
			{cartItems.map((item) => {
				return (
					<li
						key={item.id}
						className="flex justify-around space-x-6 text-sm sm:text-base sm:space-x-16 py-8 items-center font-medium border-b last:border-b-0 sm:w-fit"
					>
						<div className="w-16 sm:w-20">
							<img src={item.image} alt={item.name} />
						</div>
						<h3 className="w-24 sm:w-40">{item.name}</h3>
						<p className="">{item.price}</p>
						<p className="">{item.qty}</p>
						<AiOutlineDelete
							className="text-lg cursor-pointer"
							onClick={() => handleDelete(item.id)}
						/>
					</li>
				);
			})}
		</ul>
	);
}