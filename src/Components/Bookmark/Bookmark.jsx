import PropTypes from 'prop-types'
import Bookmarks from '../Bookmarks/Bookmarks';

const Bookmark = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h2>BookMarked Blogs : {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmarks key={bookmark.id} bookmark={bookmark} ></Bookmarks> )
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks : PropTypes.array
}

export default Bookmark;