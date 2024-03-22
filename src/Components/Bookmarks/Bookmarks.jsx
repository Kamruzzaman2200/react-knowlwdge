import PropTypes  from 'prop-types';

const Bookmarks = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 m4 rounded-xl'>
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmark : PropTypes.object
}

export default Bookmarks;