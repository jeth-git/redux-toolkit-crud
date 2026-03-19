import { Edit2, Plus, Search, Trash2 } from "lucide-react"
import RecordModal from "./record-modal"

const tableTitle = ["id","Name", "Email", "Phone", "Position", "Actions"]

const tableElts = [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@gmail.com",
        phone: 656565656,
        position: "Full Stack Developer",
        actions: [
            {
                name: "Edit",
                icon: <Edit2 size={16} />
            },
            {
                name: "Delete",
                icon: <Trash2 size={16} />
            }
        ]
    }
]
const RecordTable = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
            {/* Header  */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Employee Management
                </h1>
                <p className="text-gray-600">
                    {" "}
                    Manage employee records with Redux Toolkit
                </p>
            </div>
            {/* Search and Add Button */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={20}
                        />
                        <input 
                            type="text" 
                            placeholder="Search by name, email or position"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all">
                        <Plus size={20} />
                        Add New Record
                    </button>
                </div>
            </div>

            {/* Employee Table  */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-500 border-b border-gray-200">
                            <tr>
                                {
                                    tableTitle.map((tab, index) => (
                                        <th key={index} className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                                            {tab}
                                        </th>
                                    ))
                                }
                                
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {/* Conditional Rendering  */}
                            <tr className="px-6 py-12 text-center text-gray-500">
                                <td colSpan={6}>No Record Found</td>
                            </tr>
                            {/* else */}
                            {/* Map Method  */}
                            {
                                tableElts.map((tab, index) => (
                                <tr 
                                    key={index}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                        {
                                            tab.id
                                        }
                                    </td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                        {
                                            tab.name
                                        }
                                    </td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                        {
                                            tab.email
                                        }
                                    </td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                        {
                                            tab.phone
                                        }
                                    </td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                        {
                                            tab.position
                                        }
                                    </td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                        <div className="flex items-center justify-center gap-2">
                                        {
                                            tab.actions.map((action, index) => (
                                                <button 
                                                    key={index}
                                                    className={`
                                                        flex items-center gap-1 text-white px-3 py-1.5 rounded transition-all text-sm font-medium ${action.name === 'Edit'? "bg-blue-600 hover:bg-blue-700": "bg-red-600 hover:bg-red-700"}`}
                                                >
                                                    {action.icon}
                                                    <p>
                                                        {action.name}
                                                    </p>
                                                </button>
                                            ))
                                        }
                                        </div>
                                    </td>
                                        
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>

                {/* Footer Showing filtered vs total records */}
                <div className="bg-gray-50 px-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                        Showing Sorted Records of All Records
                    </p>
                </div>
            </div>
        </div>
        {/* Modal  */}
        <RecordModal />
    </div>
  )
}

export default RecordTable