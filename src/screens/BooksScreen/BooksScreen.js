import React, { useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import Book from '../../components/Books/Book';
import RestService from '../../services/RestService';

const restService = new RestService();

const BooksScreen = ({ route }) => {
    const [ bookList, setBookList ] = useState([]);
    console.log(route);

    useEffect(() => {
        if (!bookList.length) {
            setList();
        }
    }, [bookList]);

    const setList = useCallback(() => {
        restService.getBooks(`?orderby=popular`, 30).then(json => {
            setBookList(json);
        }).catch(() => {
            setBookList([]);
        });
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                style={ styles.list }
                data={bookList}
                renderItem={({ item }) => {
                    return bookList.length && <Book data={item} />;
                }}
            />
            { !bookList.length ? <ActivityIndicator style={ styles.loader } /> : null }
        </SafeAreaView>
    )
};
export default BooksScreen;
