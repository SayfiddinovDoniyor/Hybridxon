import com.example.demo.model.BuyRequest;
@RestController
@RequestMapping("/api")
public class BuyBookController {

    private List<BuyRequest> requests = new ArrayList<>();

    @PostMapping("/buy-request")
    public ResponseEntity<String> receiveBuyRequest(@RequestBody BuyRequest request) {
        requests.add(request);
        System.out.println("New Sell Request: " + request); // for debugging/logging
        return ResponseEntity.ok("Request received");
    }

    @GetMapping("/buy-request")
    public List<BuyRequest> getRequests() {
        return requests;
    }
}

