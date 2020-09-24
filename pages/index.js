import { Card, Button, Input} from "antd";

import StudentTable from "../components/StudentTable";
import AddModal from "../components/AddModal";
import StudentStore from '../store/studentStore'

const { Search } = Input;

const Home = () => {
  const {setIsModal} = StudentStore()

  return (
    <div style={{ padding: "10%" }}>
      <Card
        hoverable
        title={
          <div className="flex">
            <Button onClick={() => setIsModal(true)}>Add New</Button>
            <Search
              placeholder="input search text"
              onSearch={(value) => console.log(value)}
              style={{ width: 300 }}
            />
          </div>
        }
      >
        <StudentTable />
      </Card>
      <AddModal />
    </div>
  );
};

export default Home;
