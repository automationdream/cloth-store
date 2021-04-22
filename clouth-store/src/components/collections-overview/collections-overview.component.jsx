import React from "react";
import './collections-overview.styles.scss'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import PreviewCollection from "../preview-collection/preview-collection.component";
import {selectCollections} from "../../components/shop/shop.selectors";

const CollectionsOverwiew = ({collections}) => (
    <div className='collection-overview'>
        {collections.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector(
    {
        collections:selectCollections
    }
)

export default connect(mapStateToProps)(CollectionsOverwiew);
