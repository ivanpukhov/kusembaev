import React from 'react';
import PropTypes from 'prop-types';

const JSONLD = ({data}) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
    />
);

JSONLD.propTypes = {
    data: PropTypes.object.isRequired,
};

export default JSONLD;
