import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './results.css';

const propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number
}

const defaultProps = {
    initialPage: 1,
    pageSize: 10
}

class Pagination extends Component {
    constructor(props){
        super(props);
        this.state = { pager:{} };
    }

    componentWillMount() {
        //set page when items array is NOT empty
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        //reset page if items array changes
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {
        var {items,pageSize} = this.props;
        var pager = this.state.pager;

        if (page < 1 || page > pager.totalpages) {
            return;
        }

        //get new pager object for specified page
        pager = this.getPager(items.length, page, pageSize);

        //get new page of items form item array
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        //update state
        this.setState({ pager: pager });

        //call change page function in parent component
        this.props.onChangePage(pageOfItems);
    }

    getPager(totalItems, currentPage, pageSize) {
        //default to first page
        currentPage = currentPage || 1;

        //default page size
        pageSize = pageSize || 10;

        //calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 5) {
            //less than 10 total pages shows all
            startPage = 1;
            endPage = totalPages;
        } else{
            //more than 10 pages... will calculate start and end pages
            if (currentPage <= 3){
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        //calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
    render() {
        var pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (
            <ul className="pagination" >
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <button className="button_style2" onClick={() => this.setPage(1)}>First</button>
                </li>
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <button className="button_style2" onClick={() => this.setPage(pager.currentPage - 1)}>Previous</button>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                        <button className="button_style2" onClick={() => this.setPage(page)}>{page}</button>
                    </li>
                )}
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <button className="button_style2" onClick={() => this.setPage(pager.currentPage + 1)}>Next</button>
                </li>
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <button className="button_style2" onClick={() => this.setPage(pager.totalPages)}>Last</button>
                </li>
            </ul>
        );
    }
}
Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;