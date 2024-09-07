  <!-- Usage -->
  <!-- <card tag="Tag" tag_color="#DEFFFE" header="Header" detail="Detail" link-url="https://example.com"></card> -->
  <template>
    <div class="bg-white rounded-xl shadow-md overflow-hidden h-72 w-96 p-4 border border-slate-50 border-2 flex flex-col">
      <!-- Tag at the top -->
      <div class="px-4 font-custom">
        <div :style="{ backgroundColor: tag_color || '#F1F2F4' }" class="inline-flex rounded-full px-4 py-2 text-md font-semibold text-gray-700">
          <span>{{ tag }}</span>
        </div>
      </div>
  
      <!-- Content -->
      <div class="flex flex-col flex-grow justify-between">
        <div>
            <!-- Header -->
            <div class="p-4">
                <h2 class="font-bold text-3xl">{{ header }}</h2>
            </div>

            <!-- Detail -->
            <div class="px-4 py-2">
                <p>{{ detail }}</p>
            </div>
        </div>
        <!-- Link -->
        <div class="px-4 py-2">
          <a :href="linkUrl" class="text-blue-500 underline">Learn more</a>
        </div>
      </div>
    </div>
  </template>
  
  

  
  <script>
  export default {
    props: {
      tag: {
        type: String,
        required: true
      },
      tag_color: {
        type: String,
        default: ''
      },
      header: {
        type: String,
        required: true
      },
      detail: {
        type: String,
        required: true
      },
      linkUrl: {
        type: String,
        required: true
      }
    }
  }
  </script>
  

  