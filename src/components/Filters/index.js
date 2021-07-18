import {Flex, UnorderedList, ListItem} from "@chakra-ui/react"
import CommonButton from "../Common/Button"
import style from "./style.css"

function Filters({ activeFilter, handleFilterChange }) {
    function handleFilter(e) {
        console.log(e.target.name)
        handleFilterChange(e.target.name)
    }

    return (
        <Flex as="nav" 
        className="filter-container" 
        backgroundColor="#FFF" 
        borderRadius="5px">
            <UnorderedList 
            display="flex" 
            listStyleType="none" 
            justifyContent="space-evenly" 
            width="100%">
                <ListItem className={`item ${activeFilter == "less-10" ? "active" : ""}`}>
                    <CommonButton 
                    color="black" 
                    colorScheme="white" 
                    value="Menor a $10" 
                    onClick={handleFilter}
                    name="less-10"/>
                </ListItem>
                <ListItem className={`item ${activeFilter == "less-100" ? "active" : ""}`}>
                <CommonButton 
                color="black" 
                colorScheme="white" 
                value="Menor a $100"
                onClick={handleFilter}
                name="less-100"/>
                </ListItem>
                <ListItem className={`item ${activeFilter == "greater-100" ? "active" : ""}`}>
                <CommonButton 
                color="black" 
                colorScheme="white" 
                value="Mayor o igual a 100"
                onClick={handleFilter}
                name="greater-100"/>
                </ListItem>
                <ListItem className={`item ${activeFilter == "all" ? "active" : ""}`}>
                <CommonButton 
                color="black" 
                colorScheme="white" 
                value="Ver todo"
                onClick={handleFilter}
                name="all"/>
                </ListItem>
            </UnorderedList>
        </Flex>
    )
}

export default Filters