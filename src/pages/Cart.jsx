import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import CartList from "../components/CartList";

export default function Cart() {
	const loc = useLocation().search;
	const search = new URLSearchParams(loc).get("qty");
	const cartItems = useSelector((state) => state.cart.cartItems);

	return (
		<div className="container py-28 space-y-8">
			<h1 className="text-3xl tracking-tight font-semibold max-w-md">
				My shopping cart
			</h1>
			{cartItems.length !== 0 ? (
				<>
					<CartList cartItems={cartItems} />
					<div>
						<h1 className="text-xl font-semibold">
							Subtotal:{" "}
							{cartItems.reduce(
								(accumulator, current) =>
									accumulator + current.qty,
								0
							)}{" "}
							items
						</h1>
						<p>
							$
							{cartItems.reduce((prev, current) => {
								return prev + current.qty * current.price;
							}, 0)}
						</p>
					</div>
				</>
			) : (
				<p> Cart is empty. </p>
			)}
		</div>
	);
}
