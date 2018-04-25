package in.energiasolutions.iot.iot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
public class MonitorController {

    @Autowired
    private MonitorRepository monitorRepository;

    @Autowired
    private DeviceLogRepository deviceLogRepository;

    @GetMapping("/monitors")
    public ResponseEntity findAll(){
        return ResponseEntity.ok(monitorRepository.findAll());
    }

    @GetMapping("/monitors/{id}")
    public ResponseEntity findOne(@PathVariable("id")String id){
        return ResponseEntity.ok(monitorRepository.findById(id));
    }

    @PostMapping("/monitors")
    public ResponseEntity save(@RequestBody Monitor device ){
        return ResponseEntity.ok(monitorRepository.save(device));
    }

    @GetMapping("/monitors/{id}/modify")
    public ResponseEntity changeState(@PathVariable("id")String id,@RequestParam("key")String key,@RequestParam("value") String value){
        Monitor device = monitorRepository.findById(id).get();
        //device.log(key,value);
        device.updated();
        device = monitorRepository.save(device);
        deviceLogRepository.save(new DeviceLog(key,value,device));
        return ResponseEntity.ok().build();
    }

    @GetMapping("/monitors/{id}/logs")
    public ResponseEntity logs(@PathVariable("id")String id, Pageable pageable){
        Monitor device = monitorRepository.findById(id).get();
        return ResponseEntity.ok(deviceLogRepository.findByMonitor(device,pageable));
    }

    @Transactional
    @DeleteMapping("/monitors/{id}/logs")
    public void deleteLogs(@PathVariable("id")String id){
        Monitor device = monitorRepository.findById(id).get();
        deviceLogRepository.deleteByMonitor(device);
    }

    @GetMapping("/monitors/{id}/logs/{key}")
    public ResponseEntity logsByKey(@PathVariable("id")String id,@PathVariable String key, Pageable pageable){
        Monitor device = monitorRepository.findById(id).get();
        return ResponseEntity.ok(deviceLogRepository.findByKeyAndMonitor(key,device,pageable));
    }
}
