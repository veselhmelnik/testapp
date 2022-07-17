import PropTypes from 'prop-types';
import { forwardRef } from "react"
import { Helmet } from "react-helmet-async"
//materials--------------------------------
import { Box } from "@mui/material"
//-----------------------------------------
const Page = forwardRef(({children, title = '', meta, ...other}, ref) => (
    <>
        <Helmet>
            <title>{`${title} | INSIDE`}</title>
            {meta}
        </Helmet>

        <Box ref={ref} {...other}>
            {children}
        </Box>
    </>
));

Page.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    meta: PropTypes.node,
  };


export default Page