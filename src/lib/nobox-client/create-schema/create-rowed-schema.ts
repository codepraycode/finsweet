import {
  _find,
  _findOne,
  _insert,
  _insertOne,
  _updateOne,
  _updateOneById,
  _getTokenOwner,
  _search,
} from '../calls/rowed-calls';
import { CObject, Config, Options, NoboxResponse, Space } from '../types';

export const getRowedSchemaCreator =
  (config: Config) =>
    <T extends CObject>(spaceModel: Space<T>) =>
      createRowedSchema(spaceModel, config);

export type RowedSchemaModel<T extends CObject> = ReturnType<typeof createRowedSchema<T>>;

const createRowedSchema = <T extends CObject>(spaceModel: Space<T>, config: Config) => ({
  async find(
    params: Partial<T> = {},
    options: Options<T> = {
      paramRelationship: 'And',
    },
  ): Promise<Array<NoboxResponse<T>>> {
    return _find({ spaceModel, params, options, config });
  },
  async findOne(
    params: Partial<T & { id: string }>,
    options: Options<T> = {
      paramRelationship: 'And',
    },
  ): Promise<NoboxResponse<T>> {
    return _findOne({ spaceModel, params, options, config });
  },
  async search(
    params: {
      searchableFields: (keyof T)[];
      searchText: string;
    },
    options: Omit<Options<T>, 'paramRelationship' | 'populate'> = {},
  ): Promise<Array<NoboxResponse<T>>> {
    return _search({
      params,
      spaceModel,
      options,
      config,
    });
  },
  async insert(body: T[], options: Omit<Options<T>, 'pagination'> = {}): Promise<NoboxResponse<T>[]> {
    return _insert({ spaceModel, body, options, config });
  },
  async insertOne(body: T, options: Omit<Options<T>, 'pagination'> = {}): Promise<NoboxResponse<T>> {
    return _insertOne({ spaceModel, body, options, config });
  },
  async updateOne(
    params: Partial<T & { id: string }>,
    body: Partial<T>,
    options?: Omit<Options<T>, 'pagination'>,
  ): Promise<NoboxResponse<T>> {
    return _updateOne({ spaceModel, params, body, options, config });
  },
  async updateOneById(
    id: string,
    body: Partial<T>,
    options?: Omit<Options<T>, 'pagination'>,
  ): Promise<NoboxResponse<T>> {
    const params = { id };
    return _updateOneById({ spaceModel, params, body, options, config });
  },
  async getTokenOwner(token: string): Promise<NoboxResponse<T>> {
    return _getTokenOwner({ spaceModel, token, config });
  },
});
