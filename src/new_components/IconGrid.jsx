import React from 'react'
import { Grid } from 'antd-mobile';

const IconGrid = (props) => {
    const {data, history} = props;
    return (
        <Grid data={data} hasLine={false} activeStyle={false} onClick={(e,idx) => history.push(`/${data[idx].path}${data[idx].columnId ? `?columnId=${data[idx].columnId}` : ''}`)}/>
    )
}

export default IconGrid