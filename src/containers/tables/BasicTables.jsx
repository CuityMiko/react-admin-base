import React from 'react';
import { Row, Col, Card } from 'antd';
import SelectTable from './SelectTable';
import SortTable from './SortTable';
import EditableTable from './EditableTable';
import BreadcrumbCustom from '../../components/common/BreadcrumbCustom';

const BasicTables = () => (
    <div className="gutter-example">
        <BreadcrumbCustom first="表格" second="基础表格" />
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
                <div className="gutter-box">
                    <Card title="基础表格" bordered={false}>
                        <SelectTable />
                    </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col className="gutter-row" md={12}>
                <div className="gutter-box">
                    <Card title="可控的筛选和排序" bordered={false}>
                        <SortTable />
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" md={12}>
                <div className="gutter-box">
                    <Card title="可编辑" bordered={false}>
                        <EditableTable />
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
);

export default BasicTables;