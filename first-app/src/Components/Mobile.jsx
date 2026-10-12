export default function Mobile(props) {
    return (
        <>
            <h2>Brand name: {props.brand}</h2>
            <h2>Model name: {props.model}</h2>
            <h4>Ram: {props.ram}</h4>
            <h2>Storage: {props.storage}</h2>
            <h2>Price: {props.price}</h2>
        </>
    );
}