import {$Observer} from "@/classes/helpers";

export const MConfigurations = {
  created() {
     $Observer.setContext(this)
  }
}