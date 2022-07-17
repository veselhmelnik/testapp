//materials------------------------------------------
import { Box, Card, CardHeader, Button } from '@mui/material'
import { DatePicker, Form, Input, Select, Space, Switch } from 'antd'
import { operatorsList, packageList, organizationList, statusList } from 'utils/selectors';
import "antd/dist/antd.css";
//---------------------------------------------------
const { Option } = Select;
const format = 'MM-DD HH:mm';
//---------------------------------------------------
const EditForm = () => {
  const [form] = Form.useForm();

  let project = [
    {
      name: 'asdfsdf',
      link: 'rwqerqwer',
    }
  ];
  const reset = () => {
    project = [];
  }

  const onFinish = (values) => {
    console.log(values);
  }

  const onReset = () => {
    form.resetFields();
    reset();
  };

  return (
    <Card>
      <CardHeader title="Project`s name" subheader="Project`s link" sx={{ textAlign: 'center' }} />
      <Form
        size='middle'
        layout='horizontal'
        form={form}
        onFinish={onFinish}
        name="project-form"
      >
        <Box sx={{
          p: 2,
          pb: 1,
          display: 'flex',
          justifyContent: 'space-around'
        }}
        >
          <Box sx={{ minWidth: '14%' }}>
            <Form.Item name='ready'>
              <DatePicker showTime placeholder='Ready' format={format} />
            </Form.Item>
            <Form.Item name='check'>
              <DatePicker showTime placeholder='Check' format={format} value={null} />
            </Form.Item>
            <Form.Item name='finish'>
              <DatePicker showTime placeholder='Finish' format={format} />
            </Form.Item>
          </Box>
          <Box sx={{ width: '25%' }}>
            <Form.Item name='package'>
              <Select placeholder="Package" showSearch>
                {packageList.map((item) => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name='organization'>
              <Select placeholder="Organization" showSearch >
                {organizationList.map((item) => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Form.Item name='team' style={{ width: '49%' }}>
                <Select placeholder="Team">
                  <Option value="ua">UA</Option>
                  <Option value="utan">Utah</Option>
                  <Option value="serbia">Serb</Option>
                </Select>
              </Form.Item>
              <Form.Item name='status' style={{ width: '49%' }}>
                <Select placeholder="Status">
                  {statusList.map((item) => (
                    <Select.Option key={item} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Box>
          </Box>
          <Box>
            <Form.Item name="build">
              <Switch checkedChildren="Build" unCheckedChildren="Build" defaultChecked />
            </Form.Item>
            <Form.Item className='comment' name='comment'>
              <Input.TextArea style={{ height: 88 }} placeholder='Comment' />
            </Form.Item>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Form.Item className='qa' name='qa' style={{ width: '64%' }}>
                <Select placeholder="QA" showSearch>
                  {operatorsList.map((operator) => (
                    <Option key={operator}>{operator}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name='qaTime' style={{ width: '34%' }}>
                <Input placeholder='Time' />
              </Form.Item>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Form.Item name='operator' className='operator' style={{ width: '64%' }}>
                <Select placeholder="Operator" showSearch>
                  {operatorsList.map((operator) => (
                    <Option key={operator}>{operator}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name='operatorTime' style={{ width: '34%' }}>
                <Input placeholder='Time' />
              </Form.Item>
            </Box>
            <Form.Item >
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant='contained' onClick={onFinish} type="submit">Submit</Button>
                <Button variant='outlined' onClick={onReset}>Reset</Button>
              </Box>
            </Form.Item>
          </Box>
        </Box>
      </Form>
    </Card>
  )
}

export default EditForm