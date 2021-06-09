import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Container } from "../../styles/Global.styled";
import {
	SearchFilter,
	InputWrapper,
	Input,
	Form,
	Select,
} from "../../styles/SearchAndFilter.styled";

const SearchAndFilter = ({ searchTerm, handleChange }) => {
	return (
		<Container>
			<SearchFilter>
				<InputWrapper>
					<form className="form">
						<Input
							type="text"
							placeholder="Search for a country..."
							value={searchTerm}
							onChange={handleChange}
						/>
						<FaSearch className="search-icon" />
					</form>
				</InputWrapper>

				<Form>
					<Select name="select" defaultValue="filter">
						<option value="filter" hidden>
							Filter by region
						</option>

						<option value="africa">Africa</option>
						<option value="americas">America</option>
						<option value="asia">Asia</option>
						<option value="europe">Europe</option>
						<option value="oceania">Oceania</option>
					</Select>
				</Form>
			</SearchFilter>
		</Container>
	);
};

export default SearchAndFilter;
