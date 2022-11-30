import { useState } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import useLocales from '../../../hooks/useLocales';
import { useDispatch as useAppDispatch } from '../../../redux/store'

export const PageSearch = ({ searchFn }: { searchFn: any }) => {
    const dispatch = useAppDispatch();
    const { t } = useLocales();
    const [searchValue, setSearchValue] = useState("");
    const handleSearch = async (e: any) => {
        dispatch(searchFn(searchValue));
    };
    const chnageEvent = async (e: any) => {
        setSearchValue(e)
        if (e == "" || e == null || e == undefined) {
            dispatch(searchFn(""));
        }
    };

    return (
        <div className="">
            <div className="right__elementsItem search__group">
                <Paper
                    component="form"
                    className="search__form"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: 350,
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder={t<string>('searchProductsOrdersAndClients')}
                        inputProps={{
                            'aria-label': 'Search Products, Orders and Clients',
                        }}
                        type="search"
                        value={searchValue}
                        onChange={(e) => chnageEvent(e.target.value)}
                    />
                    <IconButton onClick={handleSearch} type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
        </div>
    )
}
