import { Specification } from "../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "./ISpecificationRepository";

class SpecializationsRepository implements ISpecificationRepository {
  private specifications: Specification[];

  construction() {
    this.specifications = [];
  }
  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecializationsRepository };
