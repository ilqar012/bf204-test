import React, { useEffect, useState } from "react";
import { Button, Popconfirm, Table, Tooltip, message } from "antd";
import Container from "react-bootstrap/Container";
import { deleteData, getAll } from "../../services";

function FormTable() {
  const [Formdata, setFormData] = useState([]);

  useEffect(() => {
    getAll().then((res) => {
      console.log(res);
      setFormData(res);
    });
  }, []);

  function handleDelete(id) {
    deleteData(id);
    setFormData([
      ...Formdata.filter((event) => {
        return event.id != id;
      }),
    ]);
  }

  const confirm = (id) => {
    handleDelete(id)
    message.success("Clicked on Yes");
  };
  const cancel = (id) => {
    message.error("Clicked on No");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (element, data, i) => {
        return <img src={element} alt={data.title} width={70} />;
      },
    },
    {
      title: "Name",
      dataIndex: "title",
      sorter: (a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
      render: (element, data, i) => (
        <Tooltip title={element}>
          <span>{element.slice(0, 50)}...</span>
        </Tooltip>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (element, data, i) => (
        <Tooltip title={element}>
          <span>{element.slice(0, 50)}...</span>
        </Tooltip>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      render: (element) => {
        return <span>${element}</span>;
      },
    },
    {
      title: "Delete",
      render: (element, data) => {
        return (
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => confirm(data.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button onClick={(id) => {}} type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        );
      },
    },
    {
      title: "Edit",
      render: () => {
        return <Button>Edit</Button>;
      },
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <Container>
      <Table
        columns={columns}
        dataSource={Formdata}
        onChange={onChange}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
        pagination={{ pageSize: 5 }}
      />
    </Container>
  );
}

export default FormTable;
