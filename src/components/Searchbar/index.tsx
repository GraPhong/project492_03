import './styles.css';

const Searchbar = ({ setSearch }) => {
	return (
		<input
			type="text"
			className= "search"
			placeholder="รหัสวิชา/ชื่อวิชา"
			onChange={({ currentTarget: input }) => setSearch(input.value)}
		/>
	);
};

export default Searchbar;