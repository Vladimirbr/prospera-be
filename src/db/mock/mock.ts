import jsonfile from "jsonfile";

class MockDBMock {
  private readonly dbFilePath = "src/db/mock/city.list.json";

  protected openDb(): Promise<any> {
    return jsonfile.readFile(this.dbFilePath) as Promise<any>;
  }
}

export default MockDBMock;
